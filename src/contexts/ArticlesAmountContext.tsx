import {createContext, useContext, useState} from 'react';

interface ArticlesAmountContextProviderProps {
    children: React.ReactNode;
}
export const ArticlesAmountContext = createContext({
    articlesAmount: 0,
    setArticlesAmount: (amount: number) => {},
});

export const useArticlesAmountContext = () => useContext(ArticlesAmountContext);

const ArticlesAmountContextProvider: React.FC<ArticlesAmountContextProviderProps> = ({children}) => {
    const [articlesAmount, setArticlesAmount] = useState(0);

    return (
        <ArticlesAmountContext.Provider
            value={{
                articlesAmount,
                setArticlesAmount,
            }}>
            {children}
        </ArticlesAmountContext.Provider>
    );
};

export default ArticlesAmountContextProvider;
