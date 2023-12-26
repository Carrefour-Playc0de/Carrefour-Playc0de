import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaTostadasGrisinesMarineras extends BasePage {

    readonly TOSTADAS_GRISINES_MARINERAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TOSTADAS_GRISINES_MARINERAS = this.page.locator('//a [@id="menu-item-category-tostadas-grisines-marineras"]')
    }

    async clickDesayunoMeriendaTostadasGrisinesMarineras(): Promise<void> {
        await this.click(this.TOSTADAS_GRISINES_MARINERAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaTostadasGrisinesMarineras(): Promise<void> {
        await this.clickDesayunoMeriendaTostadasGrisinesMarineras()
    }
}
