import PropTypes from 'prop-types';
import "./wrapper.scss";

export default function Wrapper({ children }) {
    return (
        <div className="wrapper-container">
            {children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node
};