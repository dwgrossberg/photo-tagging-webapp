function Notification(props) {
  return (
    <div className="position-fixed top-0 start-50 translate-middle-x">
      <div
        className={`toast show align-items-center text-white border-0 ${
          props.correct ? "bg-success" : "bg-danger"
        }`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        hidden={props.showToast ? false : true}
      >
        <div className="d-flex">
          <div className="toast-body text-center">
            {props.correct
              ? "Gotcha! You found a Pokemon."
              : "Wrong! Keep Looking."}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={props.hideToast}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
