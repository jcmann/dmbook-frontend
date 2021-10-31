import { useSelector } from 'react-redux';

export const ToolMenu = (props) => {
  const currentContent = useSelector((state) => state.display.currentContent);
  const uppercaseCurrent =
    currentContent[0].toUpperCase() + currentContent.slice(1);

  return (
    <section>
      <button>
        Add new {uppercaseCurrent.slice(0, uppercaseCurrent.length - 1)}
      </button>
      <a>View all {uppercaseCurrent}</a>
    </section>
  );
};
