export const showNotification = (message, type = 'success', container = document.body) => {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  const baseClasses = [
    'text-center',
    'p-3',
    'mb-3',
    'text-white',
    'font-bold',
    'uppercase',
    'rounded',
    'shadow',
    'mt-3',
    'border-2',
  ];

  const typeClasses = {
    success: ['bg-green-500', 'border-green-700'],
    error: ['bg-red-600', 'border-red-800'],
  };

  messageElement.classList.add(...baseClasses, ...(typeClasses[type] || typeClasses.success));

  container.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 3000);
};
