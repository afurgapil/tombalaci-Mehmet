import alertify from "alertifyjs";
export const showErrorNotification = (errorMessage) => {
  alertify.error(errorMessage);
};
