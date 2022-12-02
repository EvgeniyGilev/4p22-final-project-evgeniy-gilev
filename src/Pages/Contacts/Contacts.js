import './Contacts.css';

export default function ContactsPage() {
  return (
    <main class="main">
      <div class="form-container">
        <form class="form-container__body" action="#" id="registration-form">
          <h2 class="form-container__header">Форма обратной связи</h2>
          <div class="email-form">
            <label class="email-form__email-label" for="email">
              Email
            </label>
            <input
              class="email-form__email-input"
              type="email"
              id="email"
              name="email"
              placeholder="Введите email"
            />
            <span class="validation-error" id="errorEmail"></span>
          </div>
          <div class="password-form">
            <label class="password-form__password-label" for="password">
              Пароль
            </label>
            <input
              class="password-form__password-input"
              type="password"
              id="password"
              placeholder="Введите пароль"
            />
            <span class="validation-error" id="errorPassword"></span>
          </div>
          <div class="password-form-confirm">
            <label class="password-form__password-label" for="password">
              Подтверждение пароля
            </label>
            <input
              class="password-form__password-input"
              type="password"
              id="passwordConfirm"
              placeholder="Подтвердите пароль"
            />
            <span class="validation-error" id="errorPasswordConfirm"></span>
          </div>
          <div class="radio-container">
            <h3 class="radio-container__gender-text">Пол</h3>
            <div class="radio-container__button-container">
              <input
                class="radio-container__radio-input"
                type="radio"
                name="gender"
                id="radio-man"
                value="man"
              />
              <label class="radio-container__label" for="radio-man">
                Мужчина
              </label>
            </div>
            <div class="radio-container__button-container">
              <input
                class="radio-container__radio-input"
                type="radio"
                name="gender"
                id="radio-woman"
                value="woman"
              />
              <label class="radio-container__label" for="radio-woman">
                Женщина
              </label>
            </div>
          </div>
          <div class="textarea-container">
            <label class="textarea-container__label" for="about">
              О себе
            </label>

            <textarea
              class="textarea-container__textarea"
              id="about"
              name="about"
              placeholder="Расскажите о себе..."
            ></textarea>
          </div>
          <div class="checkbox-form">
            <input
              class="checkbox-form__input"
              type="checkbox"
              name="agree"
              id="agree"
            />
            <label class="checkbox-form__label" for="agree">
              Я согласен получать обновления на почту
            </label>
          </div>
          <button
            class="form-container__button"
            id="buttonSubmit"
            type="submit"
          >
            Регистрация
          </button>
        </form>
      </div>
    </main>
  );
}
