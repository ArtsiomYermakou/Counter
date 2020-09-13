import countReducer from "./countReducer";

const startState = {
    counterValue: 0,
    minValue: 0
}


test('increment', () => {

    const endState = countReducer(startState, { type: "INCREMENT" })

    expect(endState.counterValue).toBe(1);
    expect(endState.minValue).toBe(0);
    expect(startState.counterValue).toBe(0);
});