import Link from "next/link";
import { useBasket } from "../../context/BasketContext";
import {
  HeaderContainer,
  HeaderButton,
  HeaderBasket,
  BasketQuantity,
} from "./styled";

type HeaderProps = {
  basketQuantity: number | null;
};

export default function Header({ basketQuantity }: HeaderProps) {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <a href="/">
          <img width={160} src={"/octopus-logo.svg"} alt="octopus logo" />
        </a>
      </Link>
      <HeaderButton>
        <HeaderBasket src={"/basket.svg"} alt="basket" />
        {!!basketQuantity && (
          <BasketQuantity title="Basket items">{basketQuantity}</BasketQuantity>
        )}
      </HeaderButton>
    </HeaderContainer>
  );
}
