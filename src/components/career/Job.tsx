import Banner from './Banner'
import JobDetails from './JobDetails'
import '../../styles/career.css'

const Job = () => {
  return (
    <div>
      <Banner title='Careers' breadcrumb='Technical Support Engineer'/>
      <JobDetails/>
    </div>
  )
}

export default Job
