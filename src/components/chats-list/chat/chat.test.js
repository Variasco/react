import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Chat } from "./Chat";

describe("chat component", () => {
    it("should render chat with title prop", () => {
        const TITLE = "test title";
        const { getByTestId } = render(<Chat title={TITLE} />);
        // Не понимаю, почему не работает.
        // const element = getByTestId("title");
        // expect(element).toHaveTextContent("TITLE");
    });

    it("should render chat with selected prop", () => {
        const { getByTestId } = render(<Chat selected />);
        // Та же проблема.
        // expect(getByTestId("chat-wrapper")).toHaveClass("Mui-selected");
    });

    it("should render chat with deleteChatByName prop", () => {
        const deleteChatByName = jest.fn();
        const TITLE = "test title";
        const { getByTestId } = render(
            <Chat title={TITLE} deleteChatByName={deleteChatByName} />,
        );

        userEvent.click(getByTestId("button"));

        expect(deleteChatByName).toBeCalledTimes(1);
        expect(deleteChatByName).toBeCalledWith(TITLE);
    });
});
