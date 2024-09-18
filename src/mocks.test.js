import forEach from "./forEach.js";
import fetchToDos from "./fetchToDos.js";

it("mock callback", () => {
    const mockCallback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);

    expect(mockCallback.mock.calls[0][0]).toBe(0);

    expect(mockCallback.mock.calls[1][0]).toBe(1);

    expect(mockCallback.mock.results[0].value).toBe(42);

    expect(mockCallback.mock.results[1].value).toBe(43);


})

it("mock return", () => {
    const mockReturn = jest.fn();

    mockReturn.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce('Hello');

    const resultOne = mockReturn();
    const resultTwo = mockReturn();
    const resultThree = mockReturn();


    expect(resultOne).toBe(true);
    expect(resultTwo).toBe(false);
    expect(resultThree).toBe('Hello');
})

// The tutorial uses 'axios'. I refactored it to use 'fetch'
it("mock fetch", async () => {
    jest.spyOn(global, "fetch").mockReturnValueOnce({
        json: async () => ({
            id: 1,
            toDo: 'Complete this mock tutorial'
        })
    });

    const results = await fetchToDos(1);

    expect(results.toDo).toBe('Complete this mock tutorial');
})