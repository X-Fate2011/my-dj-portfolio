type ErrorMessageProps = {
    message?: string;
    onRetry?: () => void;
};

export const ErrorMessage = ({ message = "Etwas ist schiefgelaufen.", onRetry }: ErrorMessageProps) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-semibold">{message}</span>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-2 md:mt-0 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Erneut versuchen
                </button>
            )}
        </div>
    );
};
