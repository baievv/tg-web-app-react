const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    console.log(tg.MainButton.inVisible);
    if (tg.MainButton.inVisible) {
      tg.MainButton.hide();
      console.log("Спрятать");
    } else {
      tg.MainButton.show();
      console.log("Показать");
    }
  };
  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
