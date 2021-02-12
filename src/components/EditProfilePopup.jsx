import { useState } from 'react';

function EditProfilePopup(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    >
      <fieldset name="user" className="popup__info">
        <input
          type="text"
          placeholder="Имя"
          name="name"
          required=""
          minLength="2"
          maxLength="40"
          className="popup__input popup__input_type_name"
          id="profile-name-input"
        />
        <span
          className="popup__input-error"
          id="profile-name-input-error"
        ></span>
        <input
          type="text"
          placeholder="Род занятий"
          name="job"
          required=""
          minLength="2"
          maxLength="200"
          className="popup__input popup__input_type_occupation"
          id="profie-occupation-input"
        />
        <span
          className="popup__input-error"
          id="profie-occupation-input-error"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
