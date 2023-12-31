import React, {
	createContext,
	useContext,
	useReducer,
	type Dispatch,
	type ReactNode,
} from 'react';
import type { Movie } from 'utils/types';

interface CartState {
	movies: Movie[];
}

type Action =
	| { type: 'ADD_MOVIE'; movie: CartState['movies'][0] }
	| { type: 'REMOVE_MOVIE'; movieId: number }
	| { type: 'REMOVE_ALL_MOVIE'; movieId: number }
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
		case 'REMOVE_MOVIE': {
			const itemIndex = state.movies.findIndex(
				(item) => item.id === action.movieId
			);
			if (itemIndex !== -1) {
				const newItems = [...state.movies];
				newItems.splice(itemIndex, 1);
				return { ...state, movies: newItems };
			}
			return state;
		}
		case 'REMOVE_ALL_MOVIE':
			return {
				...state,
				movies: state.movies.filter((item) => item.id !== action.movieId),
			};
		case 'RESET_STATE':
			return {
				movies: [],
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

export const useMovieManagement = () => {
	const { dispatch } = useCartState();

	const addMovie = (movie: Movie) => {
		dispatch({ type: 'ADD_MOVIE', movie });
	};

	const removeMovie = (movieId: number) => {
		dispatch({ type: 'REMOVE_MOVIE', movieId });
	};

	const removeSpecificTitle = (movieId: number) => {
		dispatch({ type: 'REMOVE_ALL_MOVIE', movieId });
	};

	const finishPurchase = () => {
		dispatch({ type: 'RESET_STATE' });
	};

	return {
		addMovie,
		removeMovie,
		removeSpecificTitle,
		finishPurchase,
	};
};
