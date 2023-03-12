class Header extends React.Component{
    render(){
        const {title} = this.props;
        return (
            <h1>{title}</h1>
        )
    }
}

export default Header;