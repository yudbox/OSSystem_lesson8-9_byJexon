import React from 'react';
import data from './data.json';
import PropTypes from 'prop-types';

const PersonalInfo = ({ data }) => (
  <div className="personalInfo" >
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

class ShowPersonalInfo extends React.Component {
  state = {selectedCompanyId: 'disabled'}

  onSelect = (e) => {
    const selectedCompanyId = e.target.value;
    this.setState({selectedCompanyId})
  }

  render() {
    const { companies } = this.props;
    const { selectedCompanyId } = this.state;
    const companyData = companies.find(i => selectedCompanyId === i._id);
    return (
      <>
        <h3>Select person dossier</h3>
        <select value={selectedCompanyId} onChange={this.onSelect} >
          <option key="disabled" disabled value="disabled" ></option>
          {companies.map(i => (<option key={i._id} value={i._id} >{i._id}</option>))}
        </select>
        {companyData && <PersonalInfo data={companyData} />}
      </>
    );
  }
}



const Task = () => {
  return (
    <div>
      SWITCH ON THE COMPONENT IN INDEX.JS
      {/* <ShowPersonalInfo companies={data} /> */}
    </div>
  );
};

export default Task;

ShowPersonalInfo.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string.isRequired,
      guid: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      balance: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      name: PropTypes.objectOf(PropTypes.string).isRequired,
      company: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      latitude: PropTypes.string,
      longitude: PropTypes.string,
      tags: PropTypes.array,
      range: PropTypes.array,
      friends: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number,
          name: PropTypes.string
        })
      ).isRequired,
      
    })
  )
}
