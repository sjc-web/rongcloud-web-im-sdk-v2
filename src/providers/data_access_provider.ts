module RongIMLib {
    export interface DataAccessProvider {

        Conversation: RCConversation;

        init(appKey: string, config?: any): void;

        connect(token: string, callback: ConnectCallback, userId?: string, serverConf?: any): void;

        reconnect(callback: ConnectCallback, config?: any): void;

        logout(): void;

        disconnect(): void;

        setConnectionStatusListener(listener: ConnectionStatusListener): void;

        setOnReceiveMessageListener(listener: OnReceiveMessageListener): void;

        clearListeners(): void;

        getPullSetting(callback: ResultCallback<any>): void;

        setOfflineMessageDuration(duration: number, callback: ResultCallback<boolean>): void;

        sendReceiptResponse(conversationType: ConversationType, targetId: string, sendCallback: SendMessageCallback): void;

        sendTypingStatusMessage(conversationType: ConversationType, targetId: string, messageName: string, sendCallback: SendMessageCallback): void;

        sendTextMessage(conversationType: ConversationType, targetId: string, content: string, sendMessageCallback: SendMessageCallback): void;

        sendRecallMessage(conent: any, sendMessageCallback: SendMessageCallback, user?: UserInfo): void;

        getRemoteHistoryMessages(conversationType: ConversationType, targetId: string, timestamp: number, count: number, callback: GetHistoryMessagesCallback, config?: any): void;

        hasRemoteUnreadMessages(token: string, callback: ResultCallback<Boolean>): void;

        getRemoteConversationList(callback: ResultCallback<Conversation[]>, conversationTypes?: ConversationType[], count?: number, isGetHiddenConvers?: boolean): void;

        removeConversation(conversationType: ConversationType, targetId: string, callback: ResultCallback<boolean>): void;

        addMemberToDiscussion(discussionId: string, userIdList: string[], callback: OperationCallback): void;

        createDiscussion(name: string, userIdList: string[], callback: CreateDiscussionCallback): void;

        getDiscussion(discussionId: string, callback: ResultCallback<Discussion>): void;

        quitDiscussion(discussionId: string, callback: OperationCallback): void;

        removeMemberFromDiscussion(discussionId: string, userId: string, callback: OperationCallback): void;

        setDiscussionInviteStatus(discussionId: string, status: DiscussionInviteStatus, callback: OperationCallback): void;

        setDiscussionName(discussionId: string, name: string, callback: OperationCallback): void;

        joinChatRoom(chatroomId: string, messageCount: number, callback: OperationCallback): void;

        getChatRoomInfo(chatRoomId: string, count: number, order: GetChatRoomType, callback: ResultCallback<any>): void;

        setChatroomHisMessageTimestamp(chatRoomId: string, timestamp: number): void;

        getChatRoomHistoryMessages(chatRoomId: string, count: number, order: number, callback: ResultCallback<Message>): void;

        quitChatRoom(chatroomId: string, callback: OperationCallback): void;

        // 设置聊天室自定义属性
        setChatroomEntry(chatroomId: string, chatroomEntry: ChatroomEntry, callback: ResultCallback<any>): void;

        forceSetChatroomEntry(chatroomId: string, chatroomEntry: ChatroomEntry, callback: ResultCallback<any>): void;

        // 获取聊天室自定义属性
        getChatroomEntry(chatroomId: string, key: string, callback: ResultCallback<any>): void;

        // 获取聊天室所有自定义属性
        getAllChatroomEntries(chatroomId: string, callback: ResultCallback<any>): void;

        // 获取聊天室自定义属性
        removeChatroomEntry(chatroomId: string, chatroomEntry: ChatroomEntry, callback: ResultCallback<any>): void;

        forceRemoveChatroomEntry(chatroomId: string, chatroomEntry: ChatroomEntry, callback: ResultCallback<any>): void;

        // 获取聊天室自定义属性
        pullChatroomEntry(chatroomId: string, time: number, callback: ResultCallback<any>): void;

        addToBlacklist(userId: string, callback: OperationCallback): void;

        getBlacklist(callback: GetBlacklistCallback): void;

        getBlacklistStatus(userId: string, callback: ResultCallback<string>): void;

        removeFromBlacklist(userId: string, callback: OperationCallback): void;

        getFileToken(fileType: FileType, callback: ResultCallback<string>): void;

        getFileUrl(fileType: FileType, fileName: string, oriName: string, callback: ResultCallback<string>): void;

        sendMessage(conversationType: ConversationType, targetId: string, messageContent: MessageContent, sendCallback: SendMessageCallback, mentiondMsg?: boolean, pushText?: string, appData?: string, methodType?: number, params?: any): void;

        registerMessageType(messageType: string, objectName: string, messageTag: MessageTag, messageContent: string[], searchProps: string[]): void;

        addConversation(conversation: Conversation, callback: ResultCallback<boolean>): void;

        updateConversation(conversation: Conversation): Conversation;

        removeConversation(conversationType: ConversationType, targetId: string, callback: ResultCallback<boolean>): void;

        addMessage(conversationType: ConversationType, targetId: string, message: Message, callback?: ResultCallback<Message>): void;

        removeMessage(conversationType: ConversationType, targetId: string, messages: Array<Message>, callback: ResultCallback<boolean>): void;

        removeLocalMessage(conversationType: ConversationType, targetId: string, timestamps: number[], callback: ResultCallback<boolean>): void;

        getMessage(messageId: string, callback: ResultCallback<Message>): void;

        updateMessage(message: Message, callback?: ResultCallback<Message>): void;

        clearMessages(conversationType: ConversationType, targetId: string, callback: ResultCallback<boolean>): void;

        updateMessages(conversationType: ConversationType, targetId: string, key: string, value: any, callback: ResultCallback<boolean>): void;

        getConversation(conversationType: ConversationType, targetId: string, callback: ResultCallback<Conversation>): any;

        getConversationList(callback: ResultCallback<Conversation[]>, conversationTypes?: ConversationType[], count?: number, isGetHiddenConvers?: boolean): void;

        clearCache(): void;

        clearConversations(conversationTypes: ConversationType[], callback: ResultCallback<boolean>): void;

        clearHistoryMessages(params: any, callback: ResultCallback<boolean>): void;

        clearRemoteHistoryMessages(params: any, callback: ResultCallback<boolean>): void;

        deleteRemoteMessages(conversationType: ConversationType, targetId: string, messages: Array<Message>, callback: ResultCallback<boolean>): void;

        getHistoryMessages(conversationType: ConversationType, targetId: string, timestamp: number, count: number, callback: GetHistoryMessagesCallback, objectname?: string, directrion?: boolean): void;

        getTotalUnreadCount(callback: ResultCallback<number>, conversationTypes?: number[]): void;

        getConversationUnreadCount(conversationTypes: ConversationType[], callback: ResultCallback<number>): void;

        getUnreadCount(conversationType: ConversationType, targetId: string, callback: ResultCallback<number>): void;

        clearUnreadCount(conversationType: ConversationType, targetId: string, callback: ResultCallback<boolean>): void;

        clearTotalUnreadCount(callback: ResultCallback<boolean>): void;

        setConversationToTop(conversationType: ConversationType, targetId: string, isTop: boolean, callback: ResultCallback<boolean>): void;

        setConversationHidden(conversationType: ConversationType, targetId: string, isHidden: boolean): void;

        setUnreadCount(conversationType: ConversationType, targetId: string, count: number): void;

        setMessageExtra(messageId: string, value: string, callback: ResultCallback<boolean>): void;

        setMessageReceivedStatus(messageId: string, receivedStatus: ReceivedStatus, callback: ResultCallback<boolean>): void;

        setMessageSentStatus(messageId: string, sentStatus: SentStatus, callback: ResultCallback<boolean>): void;

        searchConversationByContent(keyword: string, callback: ResultCallback<Conversation[]>, conversationTypes?: ConversationType[]): void;

        searchMessageByContent(conversationType: ConversationType, targetId: string, keyword: string, timestamp: number, count: number, total: number, callback: ResultCallback<Message[]>): void;

        getDelaTime(): number;

        setServerInfo(info: any): void;

        getUserStatus(userId: string, callback: ResultCallback<UserStatus>): void;

        setUserStatus(status: number, callback: ResultCallback<boolean>): void;

        setUserStatusListener(params: any, callback: Function): void;

        subscribeUserStatus(userIds: string[], callback?: ResultCallback<boolean>): void;

        clearUnreadCountByTimestamp(conversationType: ConversationType, targetId: string, timestamp: number, callback: ResultCallback<boolean>): void;

        getUnreadMentionedMessages(conversationType: ConversationType, targetId: string): any;

        setMessageStatus(conersationType: ConversationType, targetId: string, timestamp: number, status: string, callback: ResultCallback<boolean>): void;

        setMessageContent(messageId: number, content: any, objectName: string): void;

        getConversationNotificationStatus(params: any, callback: any): void;

        setConversationNotificationStatus(params: any, callback: any): void;

        getCurrentConnectionStatus(): number;

        setEnvironment(isPrivate: boolean): void;

        getAgoraDynamicKey(engineType: number, channelName: string, callback: ResultCallback<string>): void;

        getRemotePublicServiceList(callback?: ResultCallback<PublicServiceProfile[]>, pullMessageTime?: any): void;

        getPublicServiceProfile(publicServiceType: number, publicServiceId: string, callback: any): void;

        setDeviceInfo(device: any): void;

        registerMessageTypes(messages: any): void;

        clearData(): boolean;

        getRTCUserInfoList(room: Room, callback: ResultCallback<any>): void;

        setRTCUserInfo(room: Room, info: any, callback: ResultCallback<boolean>): void;

        removeRTCUserInfo(room: Room, info: any, callback: ResultCallback<boolean>): void;

        getRTCUserList(room: Room, callback: ResultCallback<any>): void;

        getRTCRoomInfo(room: Room, callback: ResultCallback<any>): void;

        setRTCRoomInfo(room: Room, data: any, callback: ResultCallback<boolean>): void;

        removeRTCRoomInfo(room: Room, data: any, callback: ResultCallback<boolean>): void;

        joinRTCRoom(room: Room, callback: ResultCallback<boolean>): void;

        quitRTCRoom(room: Room, callback: ResultCallback<boolean>): void;

        RTCPing(room: Room, callback: ResultCallback<boolean>): void;

        setRTCUserData(roomId: string, key: string, value: string, isInner: boolean, callback: ResultCallback<boolean>, message?: any): void;

        getRTCUserData(roomId: string, key: string[], isInner: boolean, callback: ResultCallback<any>, message?: any): void;

        removeRTCUserData(roomId: string, key: string[], isInner: boolean, callback: ResultCallback<boolean>, message?: any): void;

        setRTCRoomData(roomId: string, key: string, value: string, isInner: boolean, callback: ResultCallback<boolean>, message?: any): void;

        getRTCRoomData(roomId: string, key: string[], isInner: boolean, callback: ResultCallback<any>, message?: any): void;

        removeRTCRoomData(roomId: string, key: string[], isInner: boolean, callback: ResultCallback<boolean>, message?: any): void;

        setRTCOutData(roomId: string, data: any, type: number, callback: ResultCallback<boolean>, message?: any): void;

        getRTCOutData(roomId: string, userId: string[], callback: ResultCallback<any>): void;

        getNavi(): void;

        getRTCToken(room: any, callback: ResultCallback<any>): void;

        setRTCState(room: any, content: any, callback: ResultCallback<any>): void;
    }
}
