import { useState } from "react";
import { enMessage } from "../Local/en";
import { arMessage } from "../Local/ar";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import { IntlProvider } from "react-intl";
import App from "../App";

type Locale = 'en' | 'ar';

const messages: Record<Locale, Record<string, string>> = {
  en: enMessage,
  ar: arMessage
};

const LanguageIndex: React.FC = () => {
  const [locale, setLocale] = useState<Locale>('en');
  const message = messages[locale] || enMessage;

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={message}>
        <App setLocale={setLocale} />
      </IntlProvider>
    </Provider>
  );
};

export default LanguageIndex