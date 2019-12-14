import Bar from "../../src/entities/bar";

const barFixture = async (): Promise<Bar> => {
    let bar = new Bar;
    bar.name = "Good stuff";
    bar.coordinates = {x: 1, y: 2};
    await bar.save();

    return bar;
};

export default barFixture;
