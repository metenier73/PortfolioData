export default function Contact() {
  return (
    <form 
      action="https://formspree.io/f/YOUR_FORMSPREE_ID" 
      method="POST"
      className="max-w-md mx-auto"
    >
      <input 
        type="email" 
        name="email" 
        placeholder={lang === 'fr' ? 'Votre email' : 'Your email'} 
        className="w-full p-2 mb-4 rounded"
        required
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
        {lang === 'fr' ? 'Envoyer' : 'Send'}
      </button>
    </form>
  );
}