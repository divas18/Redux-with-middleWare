import React, { useEffect } from 'react'
import { fetchUsers } from '../redux'
import { connect } from 'react-redux'

const UserContainer = (props) => {
  useEffect(() => {
    props.fetchUsersData();
  }, []);

  return (
    <div style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <h2>Hello</h2>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersData: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);