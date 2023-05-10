const tg = window.Telegram.WebApp;

export function useTelegram() {

  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.inVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.hide();
    }
  };

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
