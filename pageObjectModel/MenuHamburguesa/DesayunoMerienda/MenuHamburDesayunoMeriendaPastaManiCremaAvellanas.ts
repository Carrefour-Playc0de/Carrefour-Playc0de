import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaPastaManiCremaAvellanas extends BasePage {

    readonly PASTA_MANI_CREMA_AVELLANAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PASTA_MANI_CREMA_AVELLANAS = this.page.locator('//a [@id="menu-item-category-pasta-mani-crema-avellanas"]')
    }

    async clickDesayunoMeriendaPastaManiCremaAvellanas(): Promise<void> {
        await this.click(this.PASTA_MANI_CREMA_AVELLANAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaPastaManiCremaAvellanas(): Promise<void> {
        await this.clickDesayunoMeriendaPastaManiCremaAvellanas()
    }
}
