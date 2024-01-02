import { CDN_URL } from "../utils/constant"
const MenuCard = (props) => {
  const { name, price, imageId, defaultPrice, description } =
    props.menu.card.info
  return (
    <>
      <div id="menu-card">
        <div id="res-name">
          <h4>{name}</h4>
          <span>₹ {price ? price / 100 : defaultPrice / 100}</span>
          <p>{description}</p>
        </div>
        <div id="res-photo">
          <img src={CDN_URL + imageId} alt="" />
          <button>ADD</button>
        </div>
      </div>
      <div className="dotted-line"></div>
    </>
  )
}

export default MenuCard
