import Discord from "discord.js";
import Command, { Category } from "../Command";
import parseUsers from "../utils/parseUsers";

export default {
  name: "inv",
  aliases: ["inventory"],
  args: false,
  usage: "[user]",
  category: Category.ECONOMY,
  description: "View your inventory, or someone else's",
  cooldown: 1,
  async execute(message, args, client, currency, Users) {
    const target = parseUsers(args, message)[0] || message.author;
    if (!target) return message.channel.send("User not found!");
    const user = await Users.findOne({ where: { user_id: target.id } });
    const items = await user.getItems();

    if (!items.length)
      return message.channel.send(`${target.tag} has nothing!`);

    const embed = new Discord.MessageEmbed()
      .setTitle(`${target.username}'s items:`)
      .setThumbnail(target.avatarURL()!)
      .setColor("RANDOM");

    let desc = "";
    for (const item of items)
      desc += `\`${item.amount}\` - ${item.item.dataValues.emoji} ${item.item.dataValues.name}\n`;
    embed.setDescription(desc);

    return message.channel.send(embed);
  },
} as Command;