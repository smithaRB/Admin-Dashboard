import "./featuredInf.css";

export default function FeaturedInf() {
  return (
    <div className="featured">
   <div className="featuredItem">
    <span className="featuredTitle">Revanue</span>
    <div className="featureMoneyContainer">
        <span className="featuredMoney">$2,415</span>
        <span className="featuredMoneyRate">-11.4<span className="featuredIcon-negative"><i class="fa-solid fa-down-long"></i></span></span>
    </div>
    <span className="featuredSub">Compared to last month</span>
   </div>
   <div className="featuredItem">
    <span className="featuredTitle">Sales</span>
    <div className="featureMoneyContainer">
        <span className="featuredMoney">$4,415</span>
        <span className="featuredMoneyRate">-1.4<span className="featuredIcon-negative"><i class="fa-solid fa-down-long"></i></span></span>
    </div>
    <span className="featuredSub">Compared to last month</span>
   </div>
   <div className="featuredItem">
    <span className="featuredTitle">Cost</span>
    <div className="featureMoneyContainer">
        <span className="featuredMoney">$2,225</span>
        <span className="featuredMoneyRate">-11.4<span className="featuredIcon"><i class="fa-solid fa-up-long"></i></span></span>
    </div>
    <span className="featuredSub">Compared to last month</span>
   </div>
    </div>
  )
}
