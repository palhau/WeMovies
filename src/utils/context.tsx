import React, {
	createContext,
	useContext,
	useReducer,
	type Dispatch,
	type ReactNode,
} from 'react';

interface CartState {
	movies: Array<{
		id: number;
		title: string;
		price: number;
		image: string;
	}>;
}

type Action =
	| { type: 'ADD_MOVIE'; movie: CartState['movies'][0] }
	| { type: 'REMOVE_MOVIE'; movieId: number }
	| { type: 'RESET_STATE' };

const CartStateContext = createContext<
	| {
			state: CartState;
			dispatch: Dispatch<Action>;
	  }
	| undefined
>(undefined);

const cartStateReducer = (state: CartState, action: Action): CartState => {
	switch (action.type) {
		case 'ADD_MOVIE':
			return { ...state, movies: [...state.movies, action.movie] };
		case 'REMOVE_MOVIE':
			return {
				...state,
				movies: state.movies.filter((movie) => movie.id !== action.movieId),
			};
		case 'RESET_STATE':
			return {
				movies: [], // Reset the items array to an empty array
			};
		default:
			return state;
	}
};

interface CartStateProviderProps {
	children: ReactNode;
}

export const CartStateProvider: React.FC<CartStateProviderProps> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(cartStateReducer, {
		movies: [],
	});

	return (
		<CartStateContext.Provider value={{ state, dispatch }}>
			{children}
		</CartStateContext.Provider>
	);
};

export const useCartState = () => {
	const context = useContext(CartStateContext);
	if (context === undefined) {
		throw new Error('useAppState must be used within an CartStateProvider');
	}
	return context;
};
