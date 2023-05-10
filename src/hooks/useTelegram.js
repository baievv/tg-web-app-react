const tg = window.Telegram.WebApp;

export function useTelegram() {

  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    alert(tg.MainButton.inVisible);
    if (tg.MainButton.inVisible) {
      tg.MainButton.hide();
      alert("Спрятать");
    } else {
      tg.MainButton.show();
      alert("Показать");
    }
  };
  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
