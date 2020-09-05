module.exports = class Command extends require("../Command.js") {

	constructor() {
		super("help", ...arguments);
	}

	onCommand({ root, args, sender, channel, guildConfig }) {

		// If no arguments were specified
		if (args.length === 0) {
			const embed = new MessageEmbed()
			.setColor(guildConfig.theme.primary)
			.setFooter(`Created by JoshM#0001`)
			.addField("Moderator commands", `\`${root} moderator\``, true)
			return channel.send(embed);
		}

		if(args[0].toLowerCase() === "moderator") {
			const embed = new MessageEmbed()
			.setColor(guildConfig.theme.primary)
			guildConfig.commands["audit"].enabled && embed.addField("Auditing", `\`${guildConfig.prefix}${guildConfig.commands["audit"].alias[0]} <channel|enable|disable> [#channel (channel)]\``)
			guildConfig.commands["ban"].enabled && embed.addField("Ban user", `\`${guildConfig.prefix}${guildConfig.commands["ban"].alias[0]} <@user> [deleteMessages = true] [reason]\``)
			guildConfig.commands["mute"].enabled && embed.addField("Mute user", `\`${guildConfig.prefix}${guildConfig.commands["mute"].alias[0]} <@user> [duration = Infinity] [reason]\``)
			guildConfig.commands["unmute"].enabled && embed.addField("Unute user", `\`${guildConfig.prefix}${guildConfig.commands["unmute"].alias[0]} <@user>\``)
			guildConfig.commands["purge"].enabled && embed.addField("Purge messages", `\`${guildConfig.prefix}${guildConfig.commands["purge"].alias[0]} <length>\``)
			return channel.send(embed);
		}

		// If the subcommand dosnt exist
		return channel.send(new MessageEmbed()
		.setColor(guildConfig.theme.warn)
		.setDescription(`Unknown help chapter **${args.join(" ")}**.\nUse \`${config.prefix}${config.commands[command].command}\` for a list of commands.`));

	}

}
