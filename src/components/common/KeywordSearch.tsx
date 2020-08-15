import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import React, { FunctionComponent, ReactElement, useState } from 'react';

type Props = {
  onClick: (keyword: string) => void;
};

const KeywordSearch: FunctionComponent<Props> = ({
  onClick,
}: Props): ReactElement<Props> => {
  const [keyword, setKeyword] = useState<string>();

  /**
   * Handle keyword change
   * @param event - Input event.
   */
  const handleKeywordChange = ({ target }: any): void => {
    setKeyword(target.value);
  };

  return (
    <TextField
      id="input-keyword"
      defaultValue={keyword}
      fullWidth
      InputLabelProps={{ required: false, shrink: true }}
      label="Keyword"
      margin="normal"
      placeholder={`Try searching "banana picker"`}
      required
      variant="outlined"
      onChange={handleKeywordChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="search by keyword"
              disabled={!keyword}
              edge="end"
              onClick={() => onClick(keyword)}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default KeywordSearch;
