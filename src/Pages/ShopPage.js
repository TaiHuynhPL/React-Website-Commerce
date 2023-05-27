import Shop from "../Components/Shop/Shop";

function ShopPage() {
  return <Shop />;
}

export default ShopPage;

export async function loader() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );
  if (!response.ok) {
    throw new Error({ message: "Something went wrong!" }, { status: 500 });
  }

  const data = await response.json();

  return data;
}
