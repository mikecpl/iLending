import Toast from "react-native-root-toast";

const errorToast = () => {
  Toast.show('Something went wrong.😞 Please try again later!', {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM - 30,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0
  });
};

export { errorToast };
