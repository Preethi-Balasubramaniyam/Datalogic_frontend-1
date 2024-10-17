import Banner from "../../components/career/Banner"
import Careers from "../../components/career/Careers"
import Search from "../../components/career/Search"
import Work from "../../components/career/Work"
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
