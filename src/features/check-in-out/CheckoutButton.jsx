import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckout();

  return (
    <Button
      sizes="small"
      onClick={() => checkOut(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
