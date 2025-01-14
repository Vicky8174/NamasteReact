export  const About = () => {
    return (
        <div className="about" style={styles.container}>
            <h1 style={styles.heading}>About Us</h1>
            <p style={styles.text}>
                Welcome to <strong>Holy Restaurant</strong>, where every meal is a journey of flavors! 
                Nestled in the heart of the city, our restaurant is a haven for food enthusiasts 
                seeking authentic culinary experiences crafted with love and the finest ingredients.
            </p>
            <p style={styles.text}>
                At Gourmet Delight, we believe in blending tradition with innovation. Our chefs 
                specialize in creating dishes that not only tantalize your taste buds but also tell 
                a story of culture and creativity. From farm-to-table freshness to signature recipes, 
                we strive to make every visit memorable.
            </p>
            <p style={styles.text}>
                Whether you're here for a cozy dinner, a celebration, or just to enjoy a cup of 
                artisanal coffee, we promise an ambiance that's warm, welcoming, and utterly delightful.
            </p>
            <p style={styles.text}>We can't wait to serve you!</p>
        </div>
    );
};
const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#333",
    },
    heading: {
        fontSize: "2.5em",
        marginBottom: "20px",
        color: "#d35400",
    },
    text: {
        fontSize: "1.1em",
        lineHeight: "1.6",
        marginBottom: "15px",
    },
};