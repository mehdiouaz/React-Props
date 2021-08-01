import React from 'react'
import PropTypes from 'prop-types'

const Profile =({n,l,a,b,p,children,alert}) => {
    return (
        <div className="Int">
            My Name Is {n} {l} I am {a}
            and i am a {b} And i want to be a {p}
            <br></br> {children} {alert()}
        </div>
    )
}


Profile.propTypes = {
    n:PropTypes.string,
    l:PropTypes.string,
    a:PropTypes.number,
    b:PropTypes.string,
    p:PropTypes.string,

}
export default Profile
