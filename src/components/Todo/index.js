import './styles.css';

export default function Todo() {

  const todo = {
    id: 1,
    text: 'Mercado',
    items: [
      { check: false, text: 'Arroz' },
      { check: false, text: 'Feijão' },
      { check: false, text: 'Batata' },
      { check: false, text: 'Óleo' },
      { check: false, text: 'Macarrão' },
      { check: false, text: 'Leite' },
      { check: false, text: 'Ovos' }
    ]
  }

  return (
    <div className="todo-container">
      <h1>{todo.text}</h1>
      <div className="todo-items">
        {
          todo.items.map((item, index) => (
            <div className="todo-item" key={index}>
              <label>
                <input type="checkbox" name={`todo${todo.id}item${item.id}`} />
                <span>{item.text}</span>
              </label>
            </div>
          ))
        }
      </div>
    </div>
  );
}
