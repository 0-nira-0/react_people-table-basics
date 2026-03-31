import { NavLink, useParams } from 'react-router-dom';
import { Person } from '../types';
import classNames from 'classnames';

export const PersonLink = ({ person }: { person: Person }) => {
  const { slug } = useParams();
  return (
    <tr
      key={person.slug}
      data-cy="person"
      className={classNames({
        'has-background-warning': person.slug === slug,
      })}
    >
      <td>
        <NavLink
          to={`/people/${person.slug}`}
          className={classNames({
            'has-text-danger': person.sex === 'f',
          })}
        >
          {' '}
          {person.name}
        </NavLink>
      </td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {person.mother ? (
          <NavLink
            to={`/people/${person.mother.slug}`}
            className={classNames({
              'has-text-danger': person.mother.sex === 'f',
            })}
          >
            {' '}
            {person.mother.name}
          </NavLink>
        ) : (
          <>{person.motherName}</>
        )}
        {!person.motherName && '-'}
      </td>
      <td>
        {person.father ? (
          <NavLink
            to={`/people/${person.father.slug}`}
            className={classNames({
              'has-text-danger': person.father.sex === 'f',
            })}
          >
            {' '}
            {person.father.name}
          </NavLink>
        ) : (
          <>{person.fatherName}</>
        )}
        {!person.fatherName && '-'}
      </td>
    </tr>
  );
};
