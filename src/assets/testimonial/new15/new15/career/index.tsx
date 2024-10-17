import Banner from "./Banner"
import Careers from "./Careers"
import Search from "./Search"
import Work from "./Work"
import '../../styles/career.css'


const index = () => {

  return (
    <div id="careers">
      <Banner/>
      <Careers/>
      <Work/>
      <Search/>
    </div>
  )
}

export default index
