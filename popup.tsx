import '~src/styles/global.css'
import Home from "~src/pages/Home"
import Router from '~src/context/router';

const routes = [
  {
    prefix: 'home',
    component: Home,
    isDefault: true,
  }
];

function IndexPopup() {

  return (
    <div className="w-[360px]">
      <Router routes={routes} />
    </div>
  )
}

export default IndexPopup