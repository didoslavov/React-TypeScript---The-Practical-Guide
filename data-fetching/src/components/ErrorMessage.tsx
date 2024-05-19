type ErrorMessageProps = {
    text: string;
};

const ErrorMessage = ({ text }: ErrorMessageProps) => {
    return (
        <aside className="text-center mt-20 text-red-400 text-4xl p-8 border border-red-400 rounded-md">
            <h1>An error occurred!</h1>
            <p>{text}</p>
        </aside>
    );
};

export default ErrorMessage;
