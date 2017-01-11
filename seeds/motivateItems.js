
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('motivate').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('motivate').insert({motivate_id: 1, motivate_item: 'https://s-media-cache-ak0.pinimg.com/736x/79/fe/4b/79fe4b7a9773b1e8b1213d58592efab9.jpg', motivate_source: 'Author unknown', motivate_type: 'image'}),
        knex('motivate').insert({motivate_id: 2, motivate_item: 'https://s-media-cache-ak0.pinimg.com/736x/0b/30/b4/0b30b4d33fadb7da76f15fc1338c7e57.jpg', motivate_source: 'Author unknown', motivate_type: 'image'}),
        knex('motivate').insert({motivate_id: 3, motivate_item: 'http://www.expertrain.com/SiteAssets/BlogPosts/728-900/1kelc2ob635554443244530143.jpg', motivate_source: 'Author unknown', motivate_type: 'image'}),
        knex('motivate').insert({motivate_id: 4, motivate_item: 'https://www.youtube.com/embed/H14bBuluwB8', motivate_source: 'TED Talks: Angela Lee Duckworth', motivate_type: 'video'}),
        knex('motivate').insert({motivate_id: 5, motivate_item: 'https://s-media-cache-ak0.pinimg.com/originals/2b/0d/fe/2b0dfe5ff7c3bfee77098b54e4405d22.jpg', motivate_source: 'Māori proverb', motivate_type: 'image'}),
        knex('motivate').insert({motivate_id: 6, motivate_item: 'Whāia te iti kahurangi ki te tūohu koe me he maunga teitei. Even against challenges and difficulties strive for your dreams and goals.', motivate_source: 'Māori proverb', motivate_type: 'text'}),
        knex('motivate').insert({motivate_id: 7, motivate_item: 'https://www.youtube.com/embed/MKXjjpZqZwU', motivate_source: 'TED Talks: Steve Wozniak', motivate_type: 'video'}),
        knex('motivate').insert({motivate_id: 8, motivate_item: '“One of the great liabilities of history is that all too many people fail to remain awake through great periods of social change. Every society has its protectors of status quo and its fraternities of the indifferent who are notorious for sleeping through revolutions. Today, our very survival depends on our ability to stay awake, to adjust to new ideas, to remain vigilant and to face the challenge of change.”', motivate_source: 'Martin Luther King Jr.', motivate_type: 'text'}),
        knex('motivate').insert({motivate_id: 9, motivate_item: '“Never doubt that a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has.”', motivate_source: 'Margaret Mead', motivate_type: 'text'}),
        knex('motivate').insert({motivate_id: 10, motivate_item: '“If you’ve got an idea, start today. There’s no better time than now to get going. That doesn’t mean quit your job and jump into your idea 100% from day one, but there’s always small progress that can be made to start the movement.”', motivate_source: 'Kevin Systrom, Instagram', motivate_type: 'text'}),
        knex('motivate').insert({motivate_id: 11, motivate_item: '“It’s not about how many years of experience you have. It’s about the quality of your years of experience.”', motivate_source: 'Jacob Cass, Logo of the Day', motivate_type: 'text'}),
        knex('motivate').insert({motivate_id: 12, motivate_item: '“The biggest risk is not taking any risk… In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.”', motivate_source: 'Mark Zuckerberg, Facebook', motivate_type: 'text'}),
        knex('motivate').insert({motivate_id: 13, motivate_item: '"So if you want to gain confidence and self -esteem, you need to be around positive people, those that are nurturing you, those that are encouraging you, those that are believing in you." ', motivate_source: 'Andrian Teodoro', motivate_type: 'text'}),


      ]);
    });
};
