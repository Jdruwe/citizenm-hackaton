<script setup lang="ts">
import type { Entry } from 'contentful'
import RichText from 'contentful-rich-text-vue-renderer'
import type { Membership } from '../../../membership/types/membership.types'
import { type TypeMembership, type TypeMembershipSkeleton, isTypeMembership } from '~/types/contentful/marketing'
import { MembershipService } from '~/feature/membership/services/membership-service'
import IconList from '~/components/icon-list.vue'

interface Props {
  data: TypeMembership<'WITHOUT_UNRESOLVABLE_LINKS', string>
}

const { data } = defineProps<Props>()

let membershipId: string | undefined
if (data && isTypeMembership(data)) {
  membershipId = (data as Entry<TypeMembershipSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>).fields.membershipMasterdata?.sys.id
}

const { data: membership } = await useAsyncData(`membership-${membershipId}`, () => {
  const membershipService = new MembershipService()
  return membershipService.getMembershipById(membershipId!)
})
</script>

<template>
  <div v-if="membership" class="flex">
    <div class="basis-4/6">
      <h2 class="max-w-lg text-5xl mb-10">
        {{ (membership as Membership).commercialTitle }}
      </h2>
      <RichText v-if="(membership as Membership).commercialText" :document="(membership as Membership).commercialText" />
    </div>
    <div class="basis-2/5 ml-10">
      <IconList :items="(membership as Membership).features" />
    </div>
  </div>
</template>
