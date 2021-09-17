import '../styles/sidebar.scss';

import { Button } from './Button';
import { GenreResponseProps } from '../App';

interface SideBarProps {
  genres: GenreResponseProps[],
  setSelectedGenreId: Function,
  selectedGenreId: number,
}

export function SideBar({genres, setSelectedGenreId, selectedGenreId}: SideBarProps) {
  // Complete aqui

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}
