import './Contacts.css';
import { validateEmailRegExp } from './Contacts.utils';
import { createRef } from 'react';
import Button from '../../Components/Common/Button/Button';

export default function ContactsPage() {
  const refEmailInput = createRef();
  const refNameInput = createRef();
  const refTextArea = createRef();
  const refRadioButtonMan = createRef();
  const refRadioButtonWoman = createRef();
  const refChechBox = createRef();
  const refEmailError = createRef();
  const refNameError = createRef();
  const refCommonError = createRef();

  const LoadFileMock = (event) => {
    console.log('Идет загрузка файла...');
    event.preventDefault();
  };

  const clearErrorEmail = () => {
    refEmailError.current.textContent = '';
    refEmailInput.current.style.borderColor = 'lightskyblue';
  };

  const clearErrorName = () => {
    refNameError.current.textContent = '';
    refNameInput.current.style.borderColor = 'lightskyblue';
  };

  const ValidateForm = (event) => {
    refCommonError.current.textContent = '';
    event.preventDefault();
    let check = true;
    if (validateEmailRegExp(refEmailInput.current.value)) {
      refEmailError.current.textContent = '';
    } else {
      if (refEmailInput.current.value.trim() === '') {
        refEmailError.current.textContent = 'Поле обязательно для заполнения';
      } else {
        refEmailError.current.textContent = 'Email введён некорректно';
      }
      refEmailInput.current.style.borderColor = '#ee2424';

      check = false;
    }

    if (refNameInput.current.value.trim() === '') {
      refNameError.current.textContent = 'Поле Имя должно быть заполнено';
      refNameInput.current.style.borderColor = '#ee2424';

      check = false;
    }
    const isGenderChecked =
      refRadioButtonMan.current.checked || refRadioButtonWoman.current.checked
        ? true
        : false;

    if (!isGenderChecked) {
      check = false;
      refCommonError.current.textContent = ' Не заполнен пол! ';
    }

    if (refTextArea.current.value.trim() === '') {
      check = false;
      refCommonError.current.textContent += ' Не заполнен отзыв! ';
    }
    if (!refChechBox.current.checked) {
      check = false;
      refCommonError.current.textContent +=
        ' Не заполнено согласие на обработку данных! ';
    }

    if (check) {
      const formData = {};
      formData.email = refEmailInput.current.value;
      formData.password = refNameInput.current.value;
      formData.genderisChecked = isGenderChecked;
      if (formData.genderisChecked) {
        if (refRadioButtonMan.current.checked) formData.gender = 'man';
        else if (refRadioButtonWoman.current.checked) formData.gender = 'woman';
      } else formData.gender = null;

      formData.textMessage = refTextArea.current.value;
      formData.isAgreement = refChechBox.current.checked;

      refCommonError.current.textContent = '';

      console.log('Данные с форм: ');
      console.log(formData);
    }
  };

  return (
    <main className="main">
      <div className="form-container">
        <form
          className="form-container__body"
          action="#"
          id="registration-form"
        >
          <h2 className="form-container__header">Обратная связь</h2>
          <div className="email-form">
            <label className="email-form__email-label" htmlFor="email">
              Email
            </label>
            <input
              className="email-form__email-input"
              type="email"
              id="email"
              name="email"
              placeholder="Введите email"
              ref={refEmailInput}
              onInput={clearErrorEmail}
            />
            <span
              className="validation-error"
              id="errorEmail"
              ref={refEmailError}
            ></span>
          </div>
          <div className="name-form">
            <label className="name-form__label" htmlFor="Name">
              Имя
            </label>
            <input
              className="name-form__input"
              type="text"
              id="name"
              placeholder="Введите ваше имя"
              ref={refNameInput}
              onInput={clearErrorName}
            />
            <span
              className="validation-error"
              ref={refNameError}
              id="errorName"
            ></span>
          </div>
          <div className="radio-container">
            <h3 className="radio-container__gender-text">Пол</h3>
            <div className="radio-container__button-container">
              <input
                className="radio-container__radio-input"
                type="radio"
                name="gender"
                id="radio-man"
                value="man"
                ref={refRadioButtonMan}
              />
              <label className="radio-container__label" htmlFor="radio-man">
                Мужчина
              </label>
            </div>
            <div className="radio-container__button-container">
              <input
                className="radio-container__radio-input"
                type="radio"
                name="gender"
                id="radio-woman"
                value="woman"
                ref={refRadioButtonWoman}
              />
              <label className="radio-container__label" htmlFor="radio-woman">
                Женщина
              </label>
            </div>
          </div>
          <div className="textarea-container">
            <label className="textarea-container__label" htmlFor="about">
              Сообщение
            </label>
            <textarea
              className="textarea-container__textarea"
              id="about"
              name="about"
              placeholder="Оставьте сообщение..."
              ref={refTextArea}
            ></textarea>
          </div>
          <div className="checkbox-form">
            <input
              className="checkbox-form__input"
              type="checkbox"
              name="agree"
              id="agree"
              ref={refChechBox}
            />
            <label className="checkbox-form__label" htmlFor="agree">
              Я согласен на передачу данных
            </label>
          </div>
          <div className="buttons-block">
            <Button className="form-container__button" onClick={LoadFileMock}>
              Загрузить файл
            </Button>
            <Button className="form-container__button" onClick={ValidateForm}>
              Отправить
            </Button>
          </div>
          <label className="common-error__label" ref={refCommonError}></label>
        </form>
      </div>
    </main>
  );
}
