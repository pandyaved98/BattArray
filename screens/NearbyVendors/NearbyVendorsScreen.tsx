// This screen has been created by - Kartikey Vaish

// Packages Imports
import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Linking, FlatList, Button } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

// Local Imports
import AppButton from "../../components/AppButton";
import AppLoading from "../../components/AppLoading";
import AppText from "../../components/AppText";
import Layout from "../../constants/Layout";
import MapVendorItemCard from "../../components/MapVendorItemCard";
import VendorData from "../../mock/Vendors.json";

// Named imports
import { CoordinateTypes } from "../../types/ComponentTypes";
import { getVendors } from "../../helper/HelperFunctions";
import Animated, {
  Layout as LT,
  SlideInDown,
  SlideInUp,
  SlideOutDown,
  SlideOutUp,
} from "react-native-reanimated";
import { AppScreenProps } from "../../navigation/NavigationTypes";

// initial coordinates
const initialRegion = {
  latitude: 26.846707424488727,
  longitude: 80.94612367451191,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

// Constants
const DeviceWidth = Layout.window.width;

// function component for NearbyVendorsScreen
function NearbyVendorsScreen({ navigation }: AppScreenProps<"NearbyVendorsScreen">) {
  // Local refs
  const MapRef = useRef<MapView>(null);
  const FlatlistRef = useRef<FlatList>(null);

  // Local States
  const [Loading, SetLoading] = useState(true);
  const [Markers, SetMarkers] = useState<Array<CoordinateTypes>>([]);
  const [CurrentCoordinates, SetCurrentCoordinates] = useState<CoordinateTypes>(initialRegion);
  const [Permissison, SetPermissison] = useState(false);
  const [Denied, SetDenied] = useState(false);
  const [GettingLocation, SetGettingLocation] = useState(true);
  const [ListShow, SetListShow] = useState(true);

  // initial call
  useEffect(() => {
    InitialLoad();
  }, []);

  // when permission is granted then get the location
  useEffect(() => {
    if (Permissison) {
      GetLocation();
    }
  }, [Permissison]);

  // initia call function
  const InitialLoad = async () => {
    try {
      SetLoading(true);
      await GetPermissions();
      SetLoading(false);
    } catch (error) {
      SetLoading(false);
    }
  };

  // function to get permissions
  const GetPermissions = async () => {
    try {
      const permission = await Location.requestForegroundPermissionsAsync();

      if (!permission.canAskAgain) {
        SetDenied(true);
        return;
      } else if (permission.status === "granted") {
        SetPermissison(true);
        return;
      }
    } catch (error) {}
  };

  // function to get current location coordinates
  const GetLocation = async () => {
    try {
      SetGettingLocation(true);
      const location = await Location.getCurrentPositionAsync();

      SetCurrentCoordinates({
        name: "Current Location",
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      SetMarkers(getVendors(location.coords.latitude, location.coords.longitude));

      SetGettingLocation(false);
    } catch (error) {
      SetGettingLocation(false);
    }
  };

  // if the loading state is true then show a loader
  if (Loading) {
    return <AppLoading visible={Loading} loadingText="Getting Vendors.." />;
  }

  // if permission is rejected, then user will have to open settings and give permissions
  if (Denied) {
    return (
      <View style={styles.permissionsContainer}>
        <AppText
          text="Go to settings and Give permissions"
          marginBottom={20}
          size={20}
          style={{ textAlign: "center" }}
        />

        <AppButton title="Grant Permissions" onPress={() => Linking.openSettings()} />
      </View>
    );
  }

  // Permission is not given then show them a button to get permissions
  if (!Permissison) {
    return (
      <View style={styles.permissionsContainer}>
        <AppText
          text="We require location permission to show nearby vendors"
          marginBottom={20}
          size={20}
          style={{ textAlign: "center" }}
        />

        <AppButton title="Give Permissions" onPress={GetPermissions} />
      </View>
    );
  }

  // if current location is being fetched
  if (GettingLocation) {
    return <AppLoading visible={GettingLocation} loadingText="Getting Current Location.." />;
  }

  // render
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={initialRegion}
        zoomEnabled={true}
        ref={MapRef}
        region={{ ...CurrentCoordinates, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
        onPress={() => SetListShow(!ListShow)}
      >
        {/* Map out the markers for the coordinates given by the user */}
        {Markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.name}
            onPress={() => FlatlistRef.current?.scrollToIndex({ animated: true, index })}
          />
        ))}
      </MapView>

      {ListShow ? (
        <Animated.View
          style={styles.bottomContainer}
          entering={SlideInDown}
          exiting={SlideOutDown}
          layout={LT}
        >
          <FlatList
            ref={FlatlistRef}
            data={VendorData}
            renderItem={({ item, index }) => <MapVendorItemCard key={index} {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Animated.View>
      ) : null}

      {ListShow ? (
        <Animated.View
          style={styles.searchContainer}
          entering={SlideInUp}
          exiting={SlideOutUp}
          layout={LT}
        >
          <Button
            title="Search Vendors"
            onPress={() => navigation.navigate("SearchVendorScreen")}
          />
        </Animated.View>
      ) : null}
    </View>
  );
}

// exports
export default NearbyVendorsScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  permissionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    width: DeviceWidth,
    height: 200,
    position: "absolute",
    bottom: 0,
  },
  searchContainer: { position: "absolute", top: 10, width: "100%", alignItems: "center" },
});
