import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Pane, Heading, Button, Pre } from "evergreen-ui";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: {},
    stackTrace: {},
    showText: false,
  };
  /**
   * todo
   * add roles or user types to check if admin or something
   */
  componentDidCatch(error, stackTrace) {
    this.setState({ hasError: true, error, stackTrace });
  }
  handleHomeClick = () => {
    this.setState({ hasError: false });
    this.props.goHome();
  };
  handleShowError = () => this.setState({ showText: !this.state.showText });
  handleNotify = () => {
    // const { userAgent, platform } = navigator;
    this.props.notify({
      error: this.state.error,
      stackTrace: this.state.stackTrace,
    });
  };
  render() {
    const { hasError, error, stackTrace, showText } = this.state;
    const { message, stack } = error;
    const { componentStack } = stackTrace;
    return (
      <>
        {!hasError ? (
          this.props.children
        ) : (
          <Pane
            overflowX="hidden"
            width="100%"
            minHeight="100vh"
            backgroundColor="#fff"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading color="#D14343" size={700}>
              Ooops! Something broke...
            </Heading>
            <Pane display="flex" marginTop="10px">
              <Button
                intent="info"
                appearance="primary"
                onClick={this.handleHomeClick}
              >
                Back to home
              </Button>
              <Button intent="info" marginX="10px" onClick={this.handleNotify}>
                Notify admin
              </Button>
              <Button intent="danger" onClick={this.handleShowError}>
                Show error info
              </Button>
            </Pane>
            {showText && (
              <Pane display="flex" flexDirection="column">
                <Heading color="#D14343" size={500}>
                  {message}
                </Heading>
                <Pre>{stack}</Pre>
                <Pre>{componentStack}</Pre>
              </Pane>
            )}
          </Pane>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goHome: () => dispatch(push("/")),
  /**
   * todo
   * add front errors login
   */
  notify: (payload) => dispatch(),
});
const mapStateToProps = (state) => ({
  user: state.auth.loginData,
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
