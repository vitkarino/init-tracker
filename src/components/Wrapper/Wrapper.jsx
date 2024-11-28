import PropTypes from 'prop-types';
import "./wrapper.scss";

const Wrapper = ({ children }) => {
    return (
        <div className="wrapper-container">
            {children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node
};

export default Wrapper;