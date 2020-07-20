export const validators = {
  sizeValidate: function(e, selectedUserForm, updateProperty) {
    const initialValue =
      selectedUserForm.innerWindowStyle.container[updateProperty];
    const length = e.target.value.length;
    if (updateProperty === "top" || updateProperty === "left") {
      if (parseInt(e.target.value) > -9830 && length <= 8) {
        selectedUserForm.innerWindowStyle.container[updateProperty] =
          e.target.value;
        return;
      } else {
        selectedUserForm.innerWindowStyle.container[updateProperty] = -9830;
        return;
      }
    }
    if (length <= 8 && parseInt(e.target.value) >= 0) {
      selectedUserForm.innerWindowStyle.container[
        updateProperty
      ] = e.target.value.toString().concat("px");
    } else {
      selectedUserForm.innerWindowStyle.container[updateProperty] = (
        parseInt(initialValue) + 1
      )
        .toString()
        .concat("px");
      selectedUserForm.innerWindowStyle.container[updateProperty] = (
        parseInt(selectedUserForm.innerWindowStyle.container.height) - 1
      )
        .toString()
        .concat("px");
    }
  },
  sizeValidateForControls: function(e, selectedUserForm, updateProperty) {
    const initialValue = selectedUserForm.style[updateProperty];
    const length = e.target.value.length;
    if (length <= 8 && parseInt(e.target.value) >= 0) {
      selectedUserForm.style[updateProperty] = e.target.value
        .toString()
        .concat("px");
    } else {
      selectedUserForm.style[updateProperty] = (parseInt(initialValue) + 1)
        .toString()
        .concat("px");
      selectedUserForm.style[updateProperty] = (
        parseInt(selectedUserForm.style[updateProperty]) - 1
      )
        .toString()
        .concat("px");
    }
  },
  zoomValidate: function(e, selectedUserForm, updateProperty) {
    const initialValue =
      selectedUserForm.innerWindowStyle.container[updateProperty];

    if (updateProperty === "zoom") {
      if (parseInt(e.target.value) > 10 && parseInt(e.target.value) <= 400) {
        selectedUserForm.innerWindowStyle.container[
          updateProperty
        ] = e.target.value.toString().concat("%");
        return;
      } else {
        selectedUserForm.innerWindowStyle.container[updateProperty] = (
          parseInt(initialValue) + 1
        )
          .toString()
          .concat("%");
        selectedUserForm.innerWindowStyle.container[updateProperty] = (
          parseInt(selectedUserForm.innerWindowStyle.container.zoom) - 1
        )
          .toString()
          .concat("%");
      }
    }
  },
};
